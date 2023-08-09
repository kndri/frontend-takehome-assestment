import Select from './Select';
import './App.css';

const initialItems =  [
  {
    "id": 1,
    "color": "black",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,255,255,1],
      "hex": "#000"
    }
  },
  {
    "id": 2,
    "color": "white",
    "category": "value",
    "code": {
      "rgba": [0,0,0,1],
      "hex": "#FFF"
    }
  },
  {
    "id": 3,
    "color": "red",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,0,0,1],
      "hex": "#FF0"
    }
  },
  {
    "id": 4,
    "color": "blue",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0,0,255,1],
      "hex": "#00F"
    }
  },
  {
    "id": 5,
    "color": "yellow",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255,255,0,1],
      "hex": "#FF0"
    }
  },
  {
    "id": 6,
    "color": "green",
    "category": "hue",
    "type": "secondary",
    "code": {
      "rgba": [0,255,0,1],
      "hex": "#0F0"
    }
  },
]

function App() {
  return (
    <div className="App">
      <Select initialItems={initialItems} />
    </div>
  );
}

export default App;
