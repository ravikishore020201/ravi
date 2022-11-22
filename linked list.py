from tkinter.messagebox import NO


class Node:
    def __init__(self,data):
        self.data=data
        self.ref=None
class Ll:
    def __init__(self):
        self.head=None
    def printLl(self):
        if self.head==None:
            print("linked list is empty")
        else:
            n=self.head
            while n is not None:
                print(n.data)
                n=n.ref
n1=Node(1)
n2=Node(2)
LL1=Ll()
LL1.head=n1
n1.ref=n2
LL1.printLl()