const Graph = () => {
  const V = [];
  const adj = [];

  const addVertex = (vertex) => {
    V.push(vertex);

    adj.push([]);
  };

  const addVerticies = (verticies) => {
    V.push(...verticies);

    for (let i = 0; i < verticies.length; i++) {
      adj.push([]);
    }
  };

  const addEdge = (first, second) => {
    if (!V.includes(first) || !V.includes(second)) {
      throw Error('At least one of those items is not in the graph!');
    }

    const indexOfFirst = V.indexOf(first);
    const indexOfSecond = V.indexOf(second);

    adj[indexOfFirst].push(indexOfSecond);
    adj[indexOfSecond].push(indexOfFirst);
  };

  const bfs = (searchInput) => {
    const visited = Array(V.length).fill(false);
    const firstSearchIndex = 0;
    const searchQueue = [firstSearchIndex]; // Step 1
    let isFound = false;

    const executeBFSearch = (adjIndex) => {
      if (V[adjIndex] === searchInput) {
        isFound = true;
        return;
      }
      visited[adjIndex] = true; // Step 2
      const unvisitedNeighbors = adj[adjIndex].filter(i => !visited[i]); // Step 3
      searchQueue.push(...unvisitedNeighbors); // Step 4
      searchQueue.shift(); // Step 5
      if (searchQueue.length === 0) return;
      executeBFSearch(searchQueue[0]);
    };

    executeBFSearch(firstSearchIndex);

    return isFound;
  };

  const dfs = (start, destination) => {
    const visited = Array(V.length).fill(false);
    const resultRoute = [];

    const executeDFSearch = (startIndex, destinationIndex) => {
      resultRoute.push(V[startIndex]);
      visited[startIndex] = true;
      if (adj[startIndex].includes(destinationIndex)) {
        resultRoute.push(V[destinationIndex]);
      } else {
        adj[startIndex].forEach((neighborIndex) => {
          if (!visited[neighborIndex]) {
            executeDFSearch(neighborIndex, destinationIndex);
          }
        });
      }
    };

    executeDFSearch(V.indexOf(start), V.indexOf(destination));

    return resultRoute;
  };

  return {
    V,
    adj,
    addVertex,
    addVerticies,
    addEdge,
    bfs,
    dfs,
  };
};

export default Graph;
