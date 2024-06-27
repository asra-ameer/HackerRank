  
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    for n in range(len(arr)-1,0 ,-1):
       for i in range(n) :
          if(arr[i]>arr[i+1]):
              temp=arr[i]  
              arr[i]=arr[i+1]
              arr[i+1]=temp
              
              
    n=len(arr)
    max=arr[-1]
    while  n >=0:
        if(arr[n-1]<max):
            max=arr[n-1]
            break
                
        n -=1    
    print(max)
         