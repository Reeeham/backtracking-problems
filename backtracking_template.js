function isValidState(state) { 
  return true;   
}

function getCandidates() { 
    return [];
}

function search(state, solutions) {
    if(isValidState(state)) { 
        solutions.append(state)
    } 

    for(let candidate in getCandidates(state)){ 
        state.add(candidate);
        search(state, solutions);
        state.delete(candidate);
    }
}

function solve() {
    let solutions = [];
    let state = new Set();
    search(state, solutions);
    return solutions;
}