import heatmap
from dash import Dash, html
from data import data

app = Dash(__name__)

app.layout = html.Div([
    heatmap.Heatmap(
        id='hm',
        data=data,
        style={'height': '100%'}
    )
], style={'width': '90vh', 'height': '90vh'})


if __name__ == '__main__':
    app.run_server(debug=True)
