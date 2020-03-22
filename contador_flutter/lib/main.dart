import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      title: "Contador de Pessoas",
      home: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.fromLTRB(0, 0, 0, 10),
            child: Text(
              "Pessoas: 0",
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: EdgeInsets.all(10),
                child: FlatButton(
                  child: Text(
                    "+1",
                    style: TextStyle(fontSize: 40, color: Colors.white),
                  ),
                  onPressed: () => {},
                ),
              ),
              Padding(
                padding: EdgeInsets.all(10),
                child: FlatButton(
                  child: Text(
                    "-1",
                    style: TextStyle(fontSize: 40, color: Colors.white),
                  ),
                  onPressed: () => {},
                ),
              )
            ],
          ),
          Text(
            "Pode Entrar!",
            style: TextStyle(
                color: Colors.white, fontStyle: FontStyle.italic, fontSize: 30),
          )
        ],
      ),
    ));
