import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(title: "Contador de Pessoas", home: Home()));

class Home extends StatefulWidget {
  @override
  HomeState createState() => HomeState();
}

class HomeState extends State<Home> {
  int people = 0;

  void onPressPeople(int p) => this.setState(() => people += p);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Padding(
          padding: EdgeInsets.fromLTRB(0, 0, 0, 10),
          child: Text(
            "Pessoa(s): $people",
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
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
                onPressed: () => onPressPeople(1),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(10),
              child: FlatButton(
                child: Text(
                  "-1",
                  style: TextStyle(fontSize: 40, color: Colors.white),
                ),
                onPressed: () => onPressPeople(-1),
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
    );
  }
}
