from flask import Flask, jsonify
from .models import Weather
from .mock_data import mock_weather_data

app = Flask(__name__)

@app.route('/weather', methods=['GET'])
def get_weather():
    weather = Weather(
        mock_weather_data["location"],
        mock_weather_data["temperature"],
        mock_weather_data["condition"]
    )
    return jsonify(weather.to_dict())

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()