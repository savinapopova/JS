function solve(worker) {
    if (worker.dizziness === false) {
        return worker;
    }

    let requiredHydration = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated+= requiredHydration;
    worker.dizziness = false;
    return worker;
}
