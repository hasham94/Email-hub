// its not used in the project but i have kept it for refrence
export function generateDummyData(n: number) {
    const dummyData = Array.from({ length: n }, (_, index) => ({
        id: generateId(),
        name: `User${index + 1}`,
        email: `user${index + 1}@example.com`,
        createdAt: getRandomDate(),
        tags: 'test',
    }));

    return dummyData;
}

// Generate a random UUID
function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function getRandomDate(): string {
    const start = new Date(2023, 0, 1); // January 1, 2023
    const end = new Date(); // Current date
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleDateString('en-US'); // Format as MM/DD/YYYY
}