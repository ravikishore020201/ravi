a=[1,2,3,2,5,]
res=0

for i in range(1,len(a)+1):
    res=res^(i)^a[i-1]
print(res)

