def average(array):
    my_set=set(array)
    sum=0
    for a in my_set:
        sum=sum+a
    result =sum/len(my_set)
    return  round(float (result) ,3)
    
    
 

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)
