
n=int(input())
d3=n%10
n=n//10
d2=n%10
n=n//10
d1=n%10
n=n//10
d0=n%10

if d0==0:
    d0=1
if d1==0:
    d1=1
if d2==0:
    d2=1
if d3==0:
    d3=1  
str=str(d0)+str(d1)+str(d2)+str(d3) 
print(str) 

