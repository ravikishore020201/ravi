arr=[2,4,7,1,5,1]
m=arr[len(arr)-1]
for i in range(len(arr)-1,-1,-1):
    if arr[i]>m:
        arr[i]=1
    elif arr[i]<m:
        m=arr[i]
        arr[i]=-1
arr[len(arr)-1]=-1
print(arr)
    
