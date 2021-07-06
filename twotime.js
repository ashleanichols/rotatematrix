let N = 4;

function print(arr) {
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j)
            console.log(arr[i][j] + " ");

        console.log(" ");
    }
}

function rotate(arr) {

    // First rotation
    // with respect to main diagonal
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < i; ++j) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // Second rotation
    // with respect to middle column
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N / 2; ++j) {
            let temp = arr[i][j];
            arr[i][j] = arr[i][N - j - 1];
            arr[i][N - j - 1] = temp;
        }
    }
}
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
rotate(arr);
print(arr);