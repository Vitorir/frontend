def diagonalDifference(arr):
    # Write your code here
    leftDiagonal = 0
    rightDiagonal = 0
            
    for i in range(len(arr)):
        leftDiagonal += arr[i][i]
        rightDiagonal += arr[i][len(arr) - 1 - i]
    
    
    return abs(leftDiagonal - rightDiagonal)


print(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]))