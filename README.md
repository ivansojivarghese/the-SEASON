# theSEASON - Soccer League Simulator

A comprehensive browser-based soccer simulation game featuring 2v2 matches, intelligent AI opponents, dynamic difficulty scaling, and complete league management. Built entirely with vanilla JavaScript, HTML5, and CSS.

---

## Features

### Core Gameplay
- **2v2 Soccer Matches**: Fast-paced matches with no goalkeepers, 1-minute time limit
- **Responsive Controls**: Smooth arrow key movement with Z/X for pass/shoot actions
- **Physics Engine**: Realistic ball mechanics with collision detection, passing, and shooting accuracy based on player position
- **Pause/Resume**: Full game state preservation with visual fade effects

### AI System
- **Intelligent Opponents**: AI adapts between attack/defense modes based on ball possession
- **Dynamic Positioning**: Computer players use tactical movement and positioning logic
- **Adaptive Difficulty**: AI speed automatically adjusts based on goal difference (75%-180% of base speed)
- **Smart Tackling**: Advanced collision detection for ball stealing and player interactions

### League Management
- **Complete League System**: 4 teams (Slate, Ocean, Sky, Leaf) with round-robin tournament structure
- **Comprehensive Statistics**: Points, wins, draws, losses, goals for/against, goal difference
- **Advanced Sorting**: Multi-level table sorting by points → goal difference → goals for → alphabetical
- **Match Results**: Automatic score generation for AI vs AI matches with realistic outcomes

### Technical Architecture
- **Modular Design**: 18 specialized JavaScript modules for maintainability and extensibility
- **Performance Loops**: High/medium/low priority execution loops for smooth gameplay
- **Event Management**: Dynamic keyboard listener addition/removal for different game states
- **State Management**: Comprehensive game state tracking and reset functionality

---

## Controls

| Key | Action |
|-----|--------|
| ↑↓←→ | Move active player |
| Z | Pass ball between players |
| X | Shoot at goal |
| P | Pause/Resume game |

---

## Architecture

### Core Modules

| File | Purpose |
|------|---------|
| `pos.js` | Player/ball positioning, coordinate management |
| `ball.js` | Ball physics, shooting mechanics, collision detection |
| `loop.js` | Game loop architecture with priority-based execution |
| `key.js` | Keyboard input handling and event management |
| `nav.js` | Page navigation and UI state management |
| `timer.js` | Match timing and countdown functionality |

### AI & Gameplay

| File | Purpose |
|------|---------|
| `com.js` | Computer player AI logic and movement |
| `atk.js` | AI attack mode behavior and player chasing |
| `dif.js` | Dynamic difficulty scaling system |
| `rst.js` | Game reset and post-goal state management |
| `pse.js` | Pause/resume functionality with visual effects |

### League System

| File | Purpose |
|------|---------|
| `tab.js` | League table data structure and updates |
| `tabSec.js` | Statistics calculation helpers |
| `srt.js` | Advanced multi-criteria table sorting |
| `end.js` | Match end processing and results display |

### Utilities

| File | Purpose |
|------|---------|
| `int.js` | Loop initialization and game startup |
| `mds.js` | Miscellaneous functions and utilities |
| `load.js` | Asset loading and initialization |

---

## Gameplay Mechanics

### Shooting System
- **Accuracy Based on Position**: Closer to center = higher goal probability
- **Quadrant-Based Calculation**: Field divided into zones affecting shot accuracy
- **Randomized Outcomes**: Realistic goal/miss distribution with visual ball trajectory

### League Progression
- **Round-Based Structure**: Matches progress through structured rounds
- **Automatic Scheduling**: AI vs AI matches generate realistic scores
- **Home/Away System**: Teams alternate between home and away status
- **Persistent Statistics**: All match data tracked throughout the season

### AI Behavior
- **Context-Aware**: AI switches between offensive and defensive strategies
- **Skill Scaling**: Difficulty increases with user's lead, decreases when behind
- **Tactical Movement**: Players position themselves intelligently based on ball location

---

## Customization

The modular architecture allows easy customization:

- **Add Teams**: Extend team arrays in relevant modules
- **Modify AI**: Adjust speed, behavior patterns in `com.js` and `dif.js`
- **Change Rules**: Modify timing, scoring, or physics in respective modules
- **Visual Updates**: CSS and HTML can be modified independently

---

## Browser Compatibility

- **Recommended**: Chrome, Firefox, Safari, Edge (modern versions)
- **Requirements**: JavaScript enabled, CSS3 support

---

## License

MIT License - Feel free to modify and distribute.

---

## Developer

Created by Ivan Varghese © 2018

*A complete soccer simulation experience in your browser!*

