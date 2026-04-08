import csv
import os
from datetime import datetime
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

MENU_FILE = "menu.csv"
ORDERS_FILE = "orders.log"


def leer_menu():
    menu = []
    with open(MENU_FILE, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            menu.append(row)
    return menu


def guardar_orden(item):
    with open(ORDERS_FILE, mode='a', encoding='utf-8') as file:
        file.write(f"{datetime.now()} - {item['producto']} - ${item['precio']}\n")


def comprar_producto(producto_id):
    menu = leer_menu()
    for item in menu:
        if item['id'] == str(producto_id):
            guardar_orden(item)
            return item
    return None


@app.route('/')
def home():
    estilo = request.args.get('estilo', 'simple')
    menu = leer_menu()

    if estilo == 'botones':
        return render_template('botones.html', menu=menu)
    elif estilo == 'moderno':
        return render_template('moderno.html', menu=menu)
    else:
        return render_template('simple.html', menu=menu)


@app.route('/comprar', methods=['POST'])
def comprar():
    data = request.json
    producto = comprar_producto(data['id'])

    if producto:
        return jsonify({"mensaje": f"Compraste {producto['producto']}"})
    return jsonify({"mensaje": "Producto no encontrado"}), 404


if __name__ == '__main__':
    app.run(debug=True)

