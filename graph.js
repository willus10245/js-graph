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

  const bfs = (start, destination) => {
    const visited = [];
    const parents = [];
    let resultRoute = [];
    const firstSearchIndex = V.indexOf(start);
    const searchQueue = [firstSearchIndex];
    parents[firstSearchIndex] = null;

    const generateRoute = (childIndex) => {
      if (parents[childIndex]) {
        return [V[childIndex]].concat(generateRoute(parents[childIndex]));
      }
    };

    while (searchQueue.length > 0) {
      const currentIndex = searchQueue.shift();
      visited[currentIndex] = true;
      adj[currentIndex].forEach((neighbor) => {
        if (!parents[neighbor]) {
          parents[neighbor] = currentIndex;
        }
        if (!searchQueue.includes(neighbor) && !visited.includes(neighbor)) {
          searchQueue.push(neighbor);
        }
      });
      if (V[currentIndex] === destination) {
        resultRoute = generateRoute(currentIndex);
        break;
      }
    }

    return resultRoute;
  };

  const dfs = (start, destination) => {
    const visited = Array(V.length).fill(false);

    const executeDFSearch = (startIndex, destinationIndex) => {
      visited[startIndex] = true;
      if (adj[startIndex].includes(destinationIndex)) {
        return [V[startIndex], V[destinationIndex]];
      }

      let resultRoute = [];

      adj[startIndex].forEach((neighborIndex) => {
        if (!visited[neighborIndex]) {
          resultRoute = [V[startIndex]].concat(executeDFSearch(neighborIndex, destinationIndex));
        }
      });

      return resultRoute;
    };

    return executeDFSearch(V.indexOf(start), V.indexOf(destination));
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
