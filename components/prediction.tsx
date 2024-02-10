import React from "react";

interface Prediction {
  name: string;
  readMoreUrl: string;
}

interface PredictionTableProps {
  predictions: Prediction[];
}

const PredictionTable: React.FC<PredictionTableProps> = ({ predictions }) => (
  <table>
    <thead>
      <tr>
        <th>Prediction</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {predictions.map((prediction) => (
        <tr key={prediction.name}>
          <td>{prediction.name}</td>
          <td>
            <div>
              <a href={prediction.readMoreUrl}>Read More</a>
              <a href="https://firstderm.com/ask-online-dermatologist/">Ask a dermatologist</a>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PredictionTable;
