// 🕒 Time Complexity:
// Access: O(1)
// Insertion: O(N)
// Deletion: O(N)
// Search: O(N)
// •
// ✅Efficient: Access Time
// Can be used in problems where less access time is required.
// •
// 📍Hash Table is a data structure which can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
// •
// 📍If the hash function generates the same index for more than one key. This is known as collisions.
// Such collisions are resolved by the concept of separate chaining.


class HashTable {
  constructor(size = defaultSize) {
    //Create hash table
    //fill each bucket with empty LinkedList
    this.buckets = Array(hashTableSize)
      .fill(null)
        .map(() => new LinkedList());
    this.keys = {};
  }

  getHash(key){
    //Implement hashing algo here
    //We are just adding all the char codes
    const hash = Array.from(key).reduce((hashAccumulator, keySymbole)=>{
      return hashAccumulator + keySymbole.charCodeAt(0);
    },0)

    // Reduce hash number so it would fit hash table size
    return hash % this.buckets,length;
  }

  // Get the value -> key
  get(key){
    //get bucketLinkedList through hash index
    const bucketLinkedList = this.buckets[this.getHash(key)];
    const node = bucketLinkedList.find(item => item.key == key);

    return node ? node.value.value : undefined;
  }

  // Set key -> value
  set(key,value){
    const keyHash = this.getHash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(item => item.key == key);

    if (!node) {
      // Insert new node.
      bucketLinkedList.append({key,value});
    }else {
      // Update value of existing node.
      node.value.value = value;
    }
  }

  remove(key){
    const keyHash = this.getHash(key);
    delete this.keys[keys];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(item => item.key == key);

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }
}
