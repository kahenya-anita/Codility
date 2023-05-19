=begin
    Write a function select_keys that takes a hash and an array 
    of keys as input, and returns a new hash containing only the 
    key-value pairs with keys present in the given array.

=end

def select_keys(hash, keys)
    hash.select { |key, _| keys.include?(key) }
end

# Example usage
input = { a: 1, b: 2, c: 3, d: 4 }
selected_keys = [:b, :c, :e]
output = select_keys(input, selected_keys)
puts output.inspect # Expected output: { b: 2, c: 3 }
  