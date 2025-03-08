import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const COLUMN_POSITIONS = { 1: 400, 2: 750, 3: 1000, 4: 1250, 5: 1500 };
const Y_INCREMENT = 300;

const sortedTimelineEvents = [
  { id: "1", label: "Frieza destroys Planet Vegeta, baby Goku is sent to Earth", age: 737, column: 1 },
  { id: "2", label: "Goku meets Bulma, beginning the Dragon Ball adventure", age: 749, column: 1 },
  { id: "3", label: "Goku defeats the Red Ribbon Army", age: 750, column: 1 },
  { id: "4", label: "King Piccolo is defeated by Goku", age: 753, column: 1 },
  { id: "5", label: "Goku defeats Piccolo Jr. in the World Martial Arts Tournament", age: 756, column: 1 },
  { id: "6", label: "Goku marries Chi-Chi; their son Gohan is born", age: 757, column: 1 },
  { id: "7", label: "Raditz arrives on Earth; Goku and Raditz die in battle", age: 761, column: 1 },
  { id: "8", label: "Vegeta and Nappa invade Earth; Goku defeats them", age: 762, column: 1 },
  { id: "9", label: "The survivors travel to Planet Namek", age: 762, column: 1 },
  { id: "10", label: "Goku becomes a Super Saiyan and defeats Frieza on Namek", age: 762, column: 1 },
  { id: "11", label: "Frieza and King Cold invade Earth and are defeated by Future Trunks", age: 764, column: 1 },
  { id: "12", label: "Future Trunks warns Goku about the Androids", age: 764, column: 1 },
  { id: "13", label: "Trunks is born, Goku dies from Heart Virus", age: 766, column: 2 },
  { id: "14", label: "Dr. Gero activates Android 17 and Android 18", age: 767, column: 1 },
  { id: "15", label: "Android 17 and 18 massacre the Z-Fighters in Future Trunks’ timeline", age: 767, column: 2 },
  { id: "16", label: "Cell arrives from the future in his Imperfect form", age: 767, column: 1 },
  { id: "17", label: "Cell absorbs Android 17 and 18, achieving his Perfect Form", age: 767, column: 1 },
  { id: "18", label: "Gohan ascends to Super Saiyan 2 and defeats Cell, Goku dies", age: 767, column: 1 },
  { id: "19", label: "Future Trunks returns and destroys Androids 17 and 18", age: 784, column: 2 },
  { id: "20", label: "Cell kills Future Trunks in another timeline", age: 788, column: 3 },
  { id: "21", label: "Future Trunks kills Cell", age: 788, column: 2 },
  { id: "22", label: "Majin Buu is revived, Vegeta sacrifices himself", age: 774, column: 1 },
  { id: "23", label: "Goku and Vegeta fuse into Vegito to fight Super Buu", age: 774, column: 1 },
  { id: "24", label: "Kid Buu is destroyed by Goku’s Spirit Bomb", age: 774, column: 1 },
  { id: "25", label: "Beerus awakens and battles Super Saiyan God Goku", age: 778, column: 3 },
  { id: "26", label: "Frieza is resurrected and defeated by Goku and Vegeta", age: 779, column: 3 },
  { id: "27", label: "Future Trunks returns, warning of Goku Black", age: 780, column: 3 },
  { id: "28", label: "Zamasu steals Goku’s body and becomes Goku Black", age: 780, column: 3 },
  { id: "29", label: "Goku Black and Future Zamasu decimate Earth’s population", age: 780, column: 3 },
  { id: "30", label: "Future Zeno erases Zamasu and the ruined timeline", age: 780, column: 3 },
  { id: "31", label: "Zeno holds the Tournament of Power", age: 780, column: 3 },
  { id: "32", label: "Frieza recruits Broly to fight Goku and Vegeta", age: 780, column: 3 },
  { id: "33", label: "Goku meets Uub at the World Martial Arts Tournament", age: 784, column: 1 },
  { id: "34", label: "Pilaf accidentally wishes for Goku to become a child", age: 789, column: 1 },
  { id: "35", label: "Baby possesses Vegeta and conquers Earth", age: 789, column: 1 },
  { id: "36", label: "Super 17 emerges and is defeated by Goku", age: 789, column: 1 },
  { id: "37", label: "The Shadow Dragons appear, Omega Shenron is defeated", age: 800, column: 1 },
  { id: "38", label: "Goku leaves with Shenron", age: 800, column: 1 }
].sort((a, b) => a.age - b.age);

const edges = [
  { id: "e12-14", source: "12", target: "14" },
  { id: "e13-15", source: "13", target: "15" }
];

const DragonBallTimeline = () => {
  return (
    <div style={{ width: "100%", height: "6000px" }}>
      <h2>Dragon Ball Story Timeline</h2>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  );
};

export default DragonBallTimeline;
