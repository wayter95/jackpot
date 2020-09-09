import bar from '../assets/images/symbols/bar.png';
import befive from '../assets/images/symbols/befive.png';
import bell from '../assets/images/symbols/bell.png';
import cherry from '../assets/images/symbols/cherry.png';
import orange from '../assets/images/symbols/orange.png';
import prune from '../assets/images/symbols/prune.png';
import seven from '../assets/images/symbols/seven.png';

const loadList = () => {
    return[
        {id: 1, symbol: bar, next:2},
        {id: 2, symbol: befive, next:3},
        {id: 3, symbol: bell, next:4},
        {id: 4, symbol: cherry, next:5},
        {id: 5, symbol: orange, next:6},
        {id: 6, symbol: prune, next:7},
        {id: 7, symbol: seven, next:1},
    ]
}

export default loadList;