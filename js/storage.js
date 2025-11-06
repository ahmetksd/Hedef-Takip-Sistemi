// storage.js
const STORAGE_KEY = 'goals';

function getGoals() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveGoals(goals) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
}

function addGoal(goal) {
    const goals = getGoals();
    goals.push(goal);
    saveGoals(goals);
}

function updateGoal(id, updates) {
    const goals = getGoals();
    const index = goals.findIndex(g => g.id === id);
    if (index !== -1) {
        goals[index] = { ...goals[index], ...updates };
        saveGoals(goals);
        return goals[index];
    }
    return null;
}

function deleteGoal(id) {
    let goals = getGoals();
    goals = goals.filter(g => g.id !== id);
    saveGoals(goals);
}

function togglePin(id) {
    const goals = getGoals();
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.pinned = !goal.pinned;
        saveGoals(goals);
        return goal.pinned;
    }
    return false;
}