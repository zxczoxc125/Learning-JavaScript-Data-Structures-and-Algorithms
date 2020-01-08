function solution(N, stages) {
    const results = new Array(N).fill({stage: 0, fail: 0, attempt: 0}).map((result, index) => {return {...result, stage: index + 1}});
    stages.forEach(stage => {
        results.forEach((result) => {
            if (stage >= result.stage) { result.attempt++; }
            if (stage === result.stage) { result.fail++; }
        });
    });
    return results.sort((a, b) => {
        const resultA = a.fail / a.attempt || 0;
        const resultB = b.fail / b.attempt || 0;
        if (resultA !== resultB) {
            return resultB - resultA;
        } else {
            return a.stage - b.stage;
        }
    }).map(result => result.stage);
}