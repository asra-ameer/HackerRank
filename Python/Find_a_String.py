def count_substring(string, sub_string):
    counts=0
    
    final=string.find(sub_string)
    while(final!=-1):
        
        counts+=1
        final=string.find(sub_string,final+1)
        
    
    
    return counts

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)