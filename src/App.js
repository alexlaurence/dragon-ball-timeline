import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";

const COLUMN_POSITIONS = { 0: 100, 1: 400, 2: 700, 3: 1000, 4: 1300, 5: 1600, 6: 1900};
const Y_INCREMENT = 300;

const sortedTimelineEvents = [
  // Proto Events
  { id: "0a", label: "At Bibidi's request, Marba successfully creates Majin Buu who destroys thousands of planets.", age: -5000000, yOverride: 0, column: 1 },
  { id: "0b", label: "Four of the five Supreme Kais are killed with Buu absorbing both the South Supreme Kai and Grand Supreme Kai, adding an aspect of good to him, as well as changing his appearance.", age: -5000000, yOverride: 1, column: 1 },
  { id: "0c", label: "Eventually, the East Supreme Kai kills Bibidi and leaves Buu's shell on Earth.", age: -5000000, yOverride: 2, column: 1 },
  { id: "0d", label: "Buu absorbs the East Supreme Kai, becoming even more powerful.", age: -5000000, yOverride: 3, column: 1 },
  { id: "0e", label: "Yamoshi becomes the Legendary Super Saiyan", age: -238, column: 1 },
  { id: "0f", label: "On Namek, violent storms ravage the planet, causing a drought. Katas sends his son away on a spaceship but dies before he can follow him. The child is forced to land on the planet Earth.", age: 261, column: 1 },
  { id: "0g", label: "The child of Katas becomes the apprentice of Earth's current Guardian.", age: 431, column: 1 },
  { id: "0h", label: "The child of Katas is the chosen one and ascends to the throne of Kami after separating himself from the evil in his being. The evil in Kami's being becomes King Piccolo. The King Piccolo wars begin.", age: 431, yOverride: 1, column: 1 },
  { id: "0i", label: "Kami creates the Dragon Balls.", age: 470, column: 1 },
  { id: "0j", label: "The first Saiyans land on Planet Plant (later known as Planet Vegeta) using stolen spaceships after the destruction of their original home, Sadala.", age: 550, column: 1 },
  { id: "0k", label: "The Saiyans are annexed by the galactic overlord King Cold and start conquering planets to sell.", age: 731, column: 1 },

  // Dragon Ball Timeline
  { id: "1", label: "Frieza destroys Planet Vegeta killing most of the Saiyans including Bardock and Gine, Kakarot is sent to Earth", age: 737, yOverride: 0, column: 1 },
  { id: "1a", label: "Kakarot lands on Earth and is found by Grandpa Gohan. However Kakarot falls off a cliff and sustains a severe concussion, which causes him to lose his memory. Realising that the boy is special, Grandpa Gohan adopts Kakarot. He is renamed Son Goku.", age: 737, yOverride: 1, column: 0 },
  { id: "2", label: "Goku meets Bulma, who is in search for the 7 Dragon Balls", age: 749, column: 1 },
  { id: "3", label: "Goku defeats the Red Ribbon Army", age: 750, column: 1 },
  { id: "3a", label: "Dr. Gero begins collecting battle data on Goku and the Z-Fighters", age: 750, yOverride: 1, column: 1 },
  { id: "4", label: "King Piccolo is defeated by Goku", age: 753, column: 1 },
  { id: "5", label: "Goku defeats Piccolo Jr. in the World Martial Arts Tournament", age: 756, column: 1 },
  { id: "6", label: "Goku marries Chi-Chi; their son Gohan is born", age: 757, column: 1 },

  // Dragon Ball Z Main Timeline
  { id: "7", label: "Raditz arrives on Earth; Goku and Raditz die in battle", age: 761, column: 1 },
  { id: "8", label: "Vegeta and Nappa invade Earth; Goku defeats them", age: 762, column: 1 },
  { id: "9", label: "The survivors travel to Planet Namek in search of Dragon Balls", age: 762, column: 1 },
  { id: "10", label: "Goku becomes a Super Saiyan and defeats Frieza on Namek", age: 762, column: 1 },
  { id: "12", label: "Cell arrives from the Future and begins incubating as a Larvae", age: 763, column: 1 },
  { id: "11", label: "Frieza and King Cold seek revenge by invading Earth but are killed by Future Trunks", age: 764, column: 1 },
  { id: "40", label: "Goku returns from Yardrat where Future Trunks warns Goku about the Androids", age: 764, column: 1 },
  { id: "13a", label: "Trunks is born", age: 766, yOverride: 1, column: 1 },
  { id: "14", label: "Dr. Gero activates Android 17 and Android 18", age: 767, yOverride: 1, column: 1 },
  { id: "16", label: "Cell hatches and begins absorbing people", age: 767, yOverride: 2, column: 1 },
  { id: "17", label: "Cell absorbs Android 17 and 18, achieving his Perfect Form", age: 767, yOverride: 3, column: 1 },
  { id: "18", label: "Gohan ascends to Super Saiyan 2 and defeats Cell, Goku dies", age: 767, yOverride: 4, column: 1 },
  { id: "18a", label: "Goku returns from Otherworld for one day during the World Tournament", age: 774, yOverride: 0, column: 1 },
  { id: "19a", label: "Supreme Kai and Kibito reveal themselves at the Tournament", age: 774, yOverride: 1, column: 1 },
  { id: "20a", label: "Z-Fighters learn about Babidi's plan to revive Majin Buu", age: 774, yOverride: 2, column: 1 },
  { id: "21b", label: "Supreme Kai leads Z-Fighters to Babidi's spaceship", age: 774, yOverride: 3, column: 1 },
  { id: "22", label: "Majin Buu is revived, Vegeta sacrifices himself", age: 774, yOverride: 4, column: 1 },
  { id: "23", label: "Goku and Vegeta fuse into Vegito to fight Super Buu", age: 774, yOverride: 5, column: 1 },
  { id: "24", label: "Kid Buu is destroyed by Goku's Spirit Bomb, Uub is born", age: 774, yOverride: 6, column: 1 },

  // Dragon Ball Z Filler Timeline
  { id: "0ga", label: "Garlic also becomes the Guardian's pupil. He and the Nameless Namekian compete over who will be the next Guardian of Earth", age: 431, yOverride: 0, column: 0 },
  { id: "0gb", label: "The Tuffle scientist Dr. Lychee creates Hatchiyack, a hatred-amplification device, he intends to use as a weapon to eradicate the Saiyans. Lychee is killed by Great Ape Saiyans and Hatchiyack is launched into space with Lychee's corpse inside.", age: 730, column: 0 },

  // Dragon Ball Z Special Timeline
  { id: "0l", label: "Bardock sends his son Kakarot to the distant planet Earth due to a premonition of his son avenging the Saiyans' death at the hands of Frieza.", age: 737, column: 0 },

  // Dragon Ball Z Movie Timeline
  { id: "0la", label: "On the brink of destruction, the Tuffles use their remaining scientific power to develop a parasitic life-form to one day take revenge on the Saiyans. The Tuffle King inserts his own genes into the cells of this life-form, which is then launched into space", age: 730, column: 0 },
  { id: "22b", label: "Goku and Vegeta fuse into Gogeta to defeat Janemba", age: 774, yOverride: 5, column: 0 },

  // Dragon Ball Z Alternate Timeline
  { id: "39", label: "Goku returns from Yardrat and defeats Frieza and King Cold", age: 764, column: 4 },
  { id: "13", label: "Trunks is born, Goku dies from Heart Virus", age: 766, yOverride: 0, column: 4 },
  { id: "15", label: "Android 17 and 18 massacre the Z-Fighters in Future Trunks' timeline", age: 767, column: 4 },
  { id: "16a", label: "Bulma begins building the time machine", age: 780, column: 4 },
  { id: "17a", label: "Future Trunks travels to the past to warn about the Androids", age: 784, yOverride: 0, column: 4 },
  { id: "19", label: "Future Trunks returns and destroys Androids 17 and 18", age: 784, yOverride: 1, column: 4 },
  { id: "21", label: "Purple Haired Future Trunks kills Cell", age: 784, yOverride: 2, column: 4 },

  // Dragon Ball Z Unseen Timeline
  { id: "20", label: "Cell kills Future Trunks and steals his time machine", age: 784, yOverride: 2, column: 5 },
  
  // Daima
  { id: "41", label: "On Trunks' 9th birthday, Gomah, Degesu and Neva travel to Earth and use its Dragon Balls to turn all those who fought Majin Buu and their friends into children or babies", age: 775, column: 1 },
  { id: "42", label: "Majin Kuu defeats Gomah", age: 775, yOverride: 1, column: 1 },

  // Dragon Ball Super Timeline
  { id: "25", label: "Beerus awakens and battles Super Saiyan God Goku", age: 778, column: 2 },
  { id: "26", label: "Frieza is resurrected and defeated by Goku and Vegeta", age: 779, column: 2 },
  { id: "27", label: "Future Trunks returns, warning of Goku Black", age: 779, yOverride: 0, column: 2 },
  { id: "29", label: "Goku Black appears but warps to Future Trunks' timeline due to distortions in time", age: 779, yOverride: 2, column: 2 },
  { id: "31", label: "Zeno holds the Tournament of Power", age: 780, yOverride: 4, column: 2 },
  { id: "32", label: "Frieza recruits Broly to fight Goku and Vegeta", age: 781, column: 2 },

  // Goku Black Timeline
  { id: "28", label: "Goku's body is taken over by Zamasu from another timeline, thus becoming Goku Black", age: 778, yOverride: 1, column: 3 },

  // Zamasu Timeline
  { id: "23b", label: "Pilaf uses the Dragon Balls to wish for youth, turning himself, Mai and Shu into babies", age: 766, yOverride: 1, column: 6 },
  { id: "21a", label: "Blue Haired Future Trunks kills Cell", age: 784, yOverride: 2, column: 6 },
  { id: "23a", label: "Future Trunks trains and protects Earth as its sole defender", age: 784, yOverride: 3, column: 6 },
  { id: "22a", label: "Future Trunks kills Future Babidi and Future Dabura, preventing Buu from awakening", age: 795, column: 6 },
  { id: "24a", label: "Goku Black appears and begins destroying Future Earth's cities", age: 796, yOverride: 0, column: 6 },
  { id: "25a", label: "Future Supreme Kai and Future Kibito are killed by Goku Black", age: 796, yOverride: 1, column: 6 },
  { id: "26a", label: "Future Bulma is killed by Goku Black", age: 796, yOverride: 2, column: 6 },
  { id: "27a", label: "Future Trunks escapes to the past seeking help", age: 796, yOverride: 3, column: 6 },
  { id: "28a", label: "Future Trunks returns with Goku and Vegeta to fight Black", age: 796, yOverride: 4, column: 6 },
  { id: "29a", label: "Future Zamasu reveals himself as Black's ally", age: 796, yOverride: 5, column: 6 },
  { id: "30a", label: "Future Trunks gains new power and fights merged Zamasu", age: 796, yOverride: 6, column: 6 },
  { id: "31a", label: "Future Zeno erases the entire timeline", age: 796, yOverride: 7, column: 6 },
  { id: "32a", label: "Future Trunks and Mai move to alternate timeline", age: 796, yOverride: 8, column: 6 },

  // End of Z
  { id: "33", label: "Goku meets Uub at the World Martial Arts Tournament", age: 784, column: 1 },

  // Dragon Ball GT Timeline
  { id: "0k", label: "The Saiyan-Tuffle war takes place", age: 720, column: 0 },
  { id: "0l", label: "On the brink of destruction, the Tuffles use their remaining scientific power to develop a parasitic life-form to one day take revenge on the Saiyans. The Tuffle King inserts his own genes into the cells of this life-form, called Baby, which is then launched into space", age: 730, column: 0 },
  { id: "0m", label: "Baby, the parasitic organism with mind control abilities and the memory of the Tuffles, arrives on planet M-2. Dr. Myuu finds and is taken over by it. He uses the knowledge of advanced technology gained from the memories to begin plans to take over his world", age: 740, column: 0 },
  { id: "0n", label: "Dr. Myuu finds Rilldo and turns him into a Machine Mutant. Rilldo uses his powers to complete the conquest of planet M-2. The Machine Mutants begin gathering energy for Baby", age: 760, column: 0 },
  { id: "33a", label: "Goku meets Uub at the World Martial Arts Tournament", age: 784, column: 0 },
  { id: "34", label: "Pilaf accidentally wishes for Goku to become a child", age: 789, column: 0 },
  { id: "35", label: "Goku, Pan and Trunks search for Black Star Dragon Balls", age: 789, yOverride: 1, column: 0 },
  { id: "36", label: "Baby enacts the Universal Tuffleization Plan on Earth in order to revive the Tuffles after the Saiyans wiped them out", age: 789, yOverride: 2, column: 0 },
  { id: "37", label: "Goku achieves Super Saiyan 4 and defeats Baby", age: 789, yOverride: 3, column: 0 },
  { id: "37a", label: "The Earth explodes and Piccolo dies", age: 789, yOverride: 4, column: 0 },
  { id: "38", label: "Dr. Myuu and Dr. Gero create Super 17", age: 790, yOverride: 1, column: 0 },
  { id: "38a", label: "Super 17 emerges and is defeated by Goku", age: 790, yOverride: 2, column: 0 },
  { id: "38b", label: "The Shadow Dragons appear from overuse of Dragon Balls", age: 790, yOverride: 3, column: 0 },
  { id: "38c", label: "Goku defeats Omega Shenron with a Universal Spirit Bomb", age: 790, yOverride: 4, column: 0 },
  { id: "38d", label: "Goku leaves this world with Shenron", age: 790, yOverride: 5, column: 0 }
].sort((a, b) => a.age - b.age);

const MIN_VERTICAL_SPACING = 300;

// Group events by age first
const eventsByAge = {};
sortedTimelineEvents.forEach(event => {
  if (!eventsByAge[event.age]) {
    eventsByAge[event.age] = [];
  }
  eventsByAge[event.age].push(event);
});

// Calculate Y positions based on age only
const adjustedYPositions = {};
let lastY = 0;

Object.keys(eventsByAge)
  .sort((a, b) => parseInt(a) - parseInt(b))
  .forEach(age => {
    // Special case for ancient events
    const baseY = parseInt(age) === -5000000
      ? 500  // Start ancient events at y=1000
      : (parseInt(age) + 5000000) * Y_INCREMENT / 100;  // Scale down other positions
    
    const newY = Math.max(baseY, lastY + MIN_VERTICAL_SPACING);
    
    // Sort events of the same age by yOverride if present
    const eventsThisAge = eventsByAge[age].sort((a, b) => 
      (a.yOverride ?? 0) - (b.yOverride ?? 0)
    );
    
    // Assign positions, spacing out events with yOverride
    eventsThisAge.forEach((event, index) => {
      if (event.yOverride !== undefined) {
        adjustedYPositions[event.id] = newY + (event.yOverride * MIN_VERTICAL_SPACING / 2);
      } else {
        adjustedYPositions[event.id] = newY;
      }
    });
    
    // Update lastY to account for any overrides
    const maxOverride = Math.max(...eventsThisAge.map(e => e.yOverride ?? 0));
    lastY = newY + (maxOverride * MIN_VERTICAL_SPACING / 2);
  });

const nodes = sortedTimelineEvents.map(event => ({
  id: event.id,
  data: { 
    label: `${event.label} (Age ${event.age})`, 
    style: { whiteSpace: "normal", wordWrap: "break-word", textAlign: "center", padding: "5px", maxWidth: "200px" }
  },
  position: { 
    x: COLUMN_POSITIONS[event.column] || 100,
    y: adjustedYPositions[event.id]
  },
  type: 'default',
  draggable: false,
  className: 'react-flow__node'
}));

const edges = sortedTimelineEvents
  .map((event, index, arr) => {
    // Skip automatic connections for column 0 (movie/GT events)
    if (event.column === 0) return null;

    const sameColumnEvents = arr.filter(e => 
      e.column === event.column && e.age > event.age
    );
    
    if (sameColumnEvents.length > 0) {
      const nextEvent = sameColumnEvents.sort((a, b) => a.age - b.age)[0];
      return { 
        id: `e${event.id}-${nextEvent.id}`, 
        source: event.id, 
        target: nextEvent.id,
        style: { stroke: 'green', strokeWidth: 4 },
        animated: false,
        markerEnd: {
          type: 'arrowclosed',
          color: 'green'
        }
      };
    }
    return null;
  })
  .filter(Boolean);

// Goku Heart Virus Branch
edges.push({
  id: 'e10-39',
  source: '10',
  target: '39',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Blue Haired Trunks Born Branch
edges.push({
  id: 'e13-23b',
  source: '13',
  target: '23b',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Future Trunks Death Branch
edges.push({
  id: 'e19-20',
  source: '19',
  target: '20',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Blue Haired Future Trunks Branch (Dragon Ball Super)
edges.push({
  id: 'e19-21a',
  source: '19',
  target: '21a',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Zamasu Steals Goku's Body (Dragon Ball Super)
edges.push({
  id: 'e25-28',
  source: '25',
  target: '28',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Fusion Reborn Branch
edges.push({
  id: 'e22-22b',
  source: '22',
  target: '22b',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Battle of Gods Branch
edges.push({
  id: 'e24-25',
  source: '24',
  target: '25',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Connect Future Trunks timeline events
edges.push({
  id: 'e15-16a',
  source: '15',
  target: '16a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});
edges.push({
  id: 'e16a-17a',
  source: '16a',
  target: '17a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});
edges.push({
  id: 'e17a-19',
  source: '17a',
  target: '19',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});
edges.push({
  id: 'e19-21',
  source: '19',
  target: '21',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

// Connect Goku Black saga events in sequence
edges.push({
  id: 'e24a-25a',
  source: '24a',
  target: '25a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e25a-26a',
  source: '25a',
  target: '26a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e26a-27a',
  source: '26a',
  target: '27a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e27a-28a',
  source: '27a',
  target: '28a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e28a-29a',
  source: '28a',
  target: '29a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e29a-30a',
  source: '29a',
  target: '30a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e30a-31a',
  source: '30a',
  target: '31a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e31a-32a',
  source: '31a',
  target: '32a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

// Also connect the earlier events in this timeline
edges.push({
  id: 'e21a-23a',
  source: '21a',
  target: '23a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e23a-22a',
  source: '23a',
  target: '22a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e22a-24a',
  source: '22a',
  target: '24a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

// GT Branch
edges.push({
  id: 'e24-33a',
  source: '24',
  target: '33a',
  style: { stroke: '#ff9900', strokeWidth: 4 },
  animated: true,
  markerEnd: {
    type: 'arrowclosed',
    color: '#ff9900'
  }
});

// Connect GT Timeline
edges.push({
  id: 'e33a-34',
  source: '33a',
  target: '34',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

// Connect GT Timeline events in sequence
edges.push({
  id: 'e34-35',
  source: '34',
  target: '35',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e35-36',
  source: '35',
  target: '36',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e36-37',
  source: '36',
  target: '37',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e37-37a',
  source: '37',
  target: '37a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e37a-38',
  source: '37a',
  target: '38',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e38-38a',
  source: '38',
  target: '38a',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e38a-38b',
  source: '38a',
  target: '38b',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e38b-38c',
  source: '38b',
  target: '38c',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

edges.push({
  id: 'e38c-38d',
  source: '38c',
  target: '38d',
  style: { stroke: 'green', strokeWidth: 4 },
  animated: false,
  markerEnd: {
    type: 'arrowclosed',
    color: 'green'
  }
});

const DragonBallTimeline = () => {
  const [reactFlowInstance, setReactFlowInstance] = React.useState(null);
  const timeoutRef = React.useRef(null);

  const snapToNearestNode = React.useCallback((currentViewport) => {
    if (!currentViewport || !reactFlowInstance) return;

    // Get all nodes sorted by vertical position
    const sortedNodes = [...nodes].sort((a, b) => a.position.y - b.position.y);
    
    // Find the current visible node based on viewport center
    const viewportCenterY = -currentViewport.y / currentViewport.zoom;
    const nearestNode = sortedNodes.reduce((closest, node) => {
      const distance = Math.abs(node.position.y - viewportCenterY);
      const closestDistance = Math.abs(closest.position.y - viewportCenterY);
      return distance < closestDistance ? node : closest;
    }, sortedNodes[0]);

    // Snap to the nearest node
    if (nearestNode) {
      reactFlowInstance.setViewport({
        x: currentViewport.x,
        y: -nearestNode.position.y * currentViewport.zoom,
        zoom: currentViewport.zoom,
      }, { duration: 300 });
    }
  }, [reactFlowInstance]);

  const handleScroll = React.useCallback((event) => {
    if (timeoutRef.current) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentViewport = reactFlowInstance?.getViewport();
    
    if (!currentViewport) return;

    // Get all nodes sorted by vertical position
    const sortedNodes = [...nodes].sort((a, b) => a.position.y - b.position.y);
    
    // Find the current visible node based on viewport center
    const viewportCenterY = -currentViewport.y / currentViewport.zoom;
    const currentNodeIndex = direction > 0 
      ? sortedNodes.findIndex(node => node.position.y > viewportCenterY)
      : sortedNodes.findLastIndex(node => node.position.y < viewportCenterY);
    
    // Calculate target node index
    let targetIndex;
    if (direction > 0) {
      targetIndex = currentNodeIndex === -1 ? 0 : currentNodeIndex;
    } else {
      targetIndex = currentNodeIndex === -1 ? sortedNodes.length - 1 : currentNodeIndex;
    }

    // Get target node and scroll to it
    const targetNode = sortedNodes[targetIndex];
    if (targetNode) {
      reactFlowInstance.setViewport({
        x: currentViewport.x,
        y: -targetNode.position.y * currentViewport.zoom,
        zoom: currentViewport.zoom,
      }, { duration: 300 });
    }

    // Prevent multiple scrolls while animating
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 300);
  }, [reactFlowInstance]);

  const handleMoveEnd = React.useCallback((event, viewport) => {
    if (timeoutRef.current) return;
    
    timeoutRef.current = setTimeout(() => {
      snapToNearestNode(viewport);
      timeoutRef.current = null;
    }, 100);
  }, [snapToNearestNode]);

  // Set initial view to node 1
  React.useEffect(() => {
    if (reactFlowInstance) {
      const startNode = nodes.find(n => n.id === "1");
      if (startNode) {
        // First center the view horizontally
        reactFlowInstance.setViewport({
          x: -startNode.position.x + window.innerWidth / 2 - 125,
          y: 0,
          zoom: 0.3,
        }, { duration: 0 });

        // Then snap to the first node using our snapping logic
        setTimeout(() => {
          snapToNearestNode({
            x: -startNode.position.x + window.innerWidth / 2 - 125,
            y: 0,
            zoom: 0.3
          });
        }, 100);
      }
    }
  }, [reactFlowInstance, snapToNearestNode]);

  return (
    <div style={{ width: "100%" }}>
      <h2>Dragon Ball Story Timeline</h2>
      <div className="reactflow-wrapper" onWheel={handleScroll}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges}
          style={{ width: '100%', height: '100%' }}
          defaultZoom={0.3}
          minZoom={0.2}
          maxZoom={2}
          panOnScroll={false}
          zoomOnScroll={false}
          nodesDraggable={false}
          onInit={setReactFlowInstance}
          onMoveEnd={handleMoveEnd}
        >
          <Controls />
          <Background gap={16} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DragonBallTimeline;
