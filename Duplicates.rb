=begin
    Write a function find_duplicates that takes an array as input and returns an 
    array containing only the duplicate elements.   
=end

def find_duplicates(arr)
    arr.select { |element| arr.count(element) > 1 }.uniq
end
    
# Example usage
input = [1, 2, 3, 2, 4, 5, 3]
output = find_duplicates(input)
puts output.inspect # Expected output: [2, 3]
  