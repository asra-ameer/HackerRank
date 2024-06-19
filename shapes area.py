def average(array):
    
    sum=0
    for a in array:
        sum=sum+a
    
    result =sum/len(array)
    return float(result)    
        
    
    
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)
   