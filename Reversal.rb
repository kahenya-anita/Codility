=begin
    Write a function reverse_array that takes an array as input 
    and returns a new array with the elements reversed.
=end

def reverse_array(arr)
    arr.reverse
end
  
# Example usage
input = [1, 2, 3, 4, 5]
output = reverse_array(input)
puts output.inspect # Expected output: [5, 4, 3, 2, 1]
  