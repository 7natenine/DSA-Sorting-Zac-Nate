#1 Understanding Merge Sort
After 3 recursive calls:
[21],[1],[26,45],[29,28,2,9],[16,49,39,27,43,34,46,40]

After 16 recursive calls: 
The numbers are set into their own arrays. 
[21],[1],[26],[45],[29],[28],[2],[9],[16],[49],[39],[27],[43],
[34],[46],[40]

What are the first 2 lists to be merged?
[1],[21]

which two lists would be merged on the 7th merge 
[34],[43]

#2 Understanding quicksort
The pivot could have been either 14 or 17 on where the user chose 
to set the pivot on a even list of numbers.

Using last item as a pivot-
first partition: 
10,3,9,12,14,17,13,15,19,16 
second partition:
10,3,9,12,14,13,15,16,17,19

Using first number as a pivot-
first partition: 
13,10,3,9,12,14,17,15,19,16
second partition: 
10,3,9,12,13,14,17,15,19,16