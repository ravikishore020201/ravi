def solve(arr):
    if len(arr)==2:
        f=""
        for i in arr:
            f+=str(i)
        return f
    else:
        result=[]
        for i in range(len(arr)-1):
            s=arr[i]+arr[i+1]
            s=s%10
            result.append(s)
        return solve(result)
print(solve([1,2]))
        