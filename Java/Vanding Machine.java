#!/bin/python3

import math
import os
import random
import re
import sys



class VendingMachine:
    def __init__(self,num_items,item_price):
        self.num_items=num_items
        self.item_price=item_price
        
        buy(req_items,money)
    # Implement the VendingMachine here
    pass

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    num_items, item_coins = map(int, input().split())
    machine = VendingMachine(num_items, item_coins)

    n = int(input())
    for _ in range(n):
        num_items, num_coins = map(int, input().split())
        try:
            change = machine.buy(num_items, num_coins)
            fptr.write(str(change) + "\n")
        except ValueError as e:
            fptr.write(str(e) + "\n")


    fptr.close()
