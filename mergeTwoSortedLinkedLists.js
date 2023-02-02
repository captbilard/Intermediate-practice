//Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

function mergeLists(head1, head2) {
    if(head1.data == null){
        return head2
    }else if(head2.data == null){
        return head1
    }
    
    let head3, currentNode
    let tail3 = head3
    
    while(head1 != null && head2 != null){
        if(head1.data == head2.data){
            currentNode = getNewNode(head1.data)
            head1 = head1.next
        }else if(head1.data < head2.data){
            currentNode = getNewNode(head1.data)
            head1 = head1.next
        }else{
            currentNode = getNewNode(head2.data)
            head2 = head2.next
        }
        if(head3 == undefined){
            head3 = currentNode
            tail3 = head3
          }else{
              tail3.next = currentNode
              tail3 = currentNode
            }
    }
    
    if(head1 == null){
        tail3.next = head2
    }else{
        tail3.next = head1
    }
    return head3
}


function getNewNode(value){
    return {data: value, next:null}
}

let head1 ={
  data: 1,
  next:{
    data: 2,
    next:{ data: 3, next: null }
  }
} 
let head2 = {
  data: 3,
  next: { data: 4, next: null }
}

console.log(mergeLists(head1, head2))