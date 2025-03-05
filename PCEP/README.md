# pcep-notes
Notes for my PCEP cert. Do I even need this?

## to-do list
* go through videos
* flashcards if there's anything I don't already know
* take PCEP test

## primary source
https://www.udemy.com/course/python-pcep

## PCEP sections and mapping
1. Fundamentals ➡️ Module 1 & 2
2. Control Flow ➡️ Module 3
3. Data Collections ➡️ Module 4
4. Functions and Exceptions ➡️ Module 5

## module 1: basic concepts
* covers ```print```
    * printing apostophes using double quotes around singles
    * using escape character
    * all prints have a newline at the end
    * ```\n``` is newline
* variables
    * must start with a letter or underscore, no numbers
    * case sensitive
    * protected names (from, global, etc.)
* data types
    * strings
    * int (whole numbers)
    * floats (decimals)
    * boolean (```True``` or ```False```, case sensitive)
    * COMMENT: more types to come later...
* comments
    * uses hash, turns rest of the line into comment
* numerical representations
    * as of 3.6, you can use underscores in numbers to improve readability
        * ```12_000_300``` = ```120003000```
    * scientific notation
        * 3e4 or 3E4 = 3 * 10000 = 30000
        * 3e-4 = 3 * .0001 = .0003
    * octal numbers
        * ```0o123```
    * hex
        * ```0x123```
* operators
    * addition +
    * subtraction -
    * multiplication *
    * division
        * / standard, produces float, regardless of dividing ints
        * // integer division, nearest whole number, rounded down
        * % modulo, returns just remainder
        * never divide by zero (ZeroDivisionError)
    * powers/exponents **
* extra: how does modulo work?
* assigning values
    * can multiple strings, never knew
* input() function
    * always returns a string type
* technical theory
    * translate from source to machine code
    * compilation or interpretation
        * comp = executable file (compile once)
        * inter = runs on the fly (this is Python)
            * "scripting language"
    * py executes top to bottom
        * lexis, syntax, semantics
            * lexis = reserved terms in Python
            * syntax
            * semantics
(Passed post module test, 14/15.)

## module 2: data types, evals, basic i/o
* typecasting
    * changing variable types
* more re: operators
    * binary operators (require two values), ```+ - * / // %```
    * unary operators for making positive/negative
* order of operations
    * PEMDAS
* floating point accuracy
    * floats are more-or-less right, but not 100%
    * precision is limited
* exponents and order of operations:
    * without parenthesis, it starts from the right and goes to the left
    * thus ```2 ** 3 ** 4``` is the same as ```2 ** (3 ** 4)```
* more print and strings
    * covering ```len()```
    * kwargs (keyword args)
        * end can be used to redefine an endline character
        * sep argument is used to redefine spacing between strings in a print
* bit operators
    * probably shouldn't be in PCEP; but it is
    * operators: ```& | ~ ^ << >>```
        * & and
        * | or
        * ^ xor
        * ~ not
        * << >> shift bit
        * << 1 = double
        * << 2 = four
        * >> 1 = half
        * >> 2 = quarter
    * how to convert binary to decimal

## module 3: control flow, conditionals, loops
* if statements
    if else elif (else if)
* logical operators and conditions
    * < > <= >= == !=
* joining multiple conditions
    * ```and or not```
    * priority: not, and, or
* nested if statements
    * easy easy (no notes)
* while loops
    * easy easy (no notes)
    * used for unknown number of steps
* for loops
    * used for a known number of steps
    * no conditionals
    * easy easy (no notes)
* break and continue
    * break is for exiting a loop
    * great for getting out of a shitty while loop
    * continue is good for skipping back to the conditional
* other loop features
    * pass requires instruction in a loop; it can be used as a placeholder so code doesn't throw errors (works in loops and if/else logic)
    * nested loops, easy
    * loops with else (seldom used/rare)
        * else always get executed after a loop finishes
    
## module 4: data collections
* intro to lists
    * they're arrays, duh
    * indexing is the same
    * i am annoyed by the terminology change
    * slicing
        * ```top_cities[0:2]```
        * returns the first two items in the list, first val is starting point, second val is the point where you don't share, i.e.: end here, but don't display.
        * ```top_cities[2:]``` means start at element 2 (the third element) and continue through the remainder of the list
        * ```top_cities[:3]``` start at the beginning and go through until index 3, but don't show index 3
* deleting list elements
    * ```del``` deletes -- use as: ```del top_cities[2]```
    * elements nuked this way have their space filled-in as all following items in the list are shifted left
    * can use slicing to remove in a similar methodology
    * ```del top_cities[3:]``` removes everything from index 3 onward
* adding lists elements
    * use ```.append()``` method to add to the end of the list
    * use ```.insert(x, y)``` method to insert value y at location x in the list
* iterating lists
    * ```for item in list_name:``` you lose index value here, though
    * ```for idx in range(len(top_cities):``` then index each item by idx like ```top_cities[idx]```
* changing element positions
    * doesn't require a temp in python
    * just do ```var_1, var_2 = var_2, var_1```
    * applies to lists with an index, just the same way
    * ```.sort()``` method destroys original
    * as a temporary function, you can use ```sorted(list_name)``` to output results similar to .sort() without impacting the original list
* checking element presence
    * ```if val in list_name:```
    * ```if val not it list_name:```
* copying lists
    * if you have list_1 and do: ```list_2 = list_1``` you're making a copy of a reference to the list, so changing element[0] changes it in both
    * if you use slicing you get two unique lists where memory is concerned -- do ```list_2 = list_1[:]
    * also use slicing to copy a fragment of the original into the new list
* list comprehension
    * ```numbers = [i for i in range(1,101)]```
    * ```numbers = [i for i in range(1,100) if i % 3 != 0]```
* nested lists
    * ```test = [['A1', 'A2', 'A3'], [['B1', 'B2', 'B3']]```
    * ```test[0] == ['A1', 'A2', 'A3']```
    * ```test[0][2] == 'A3'```
* adding and multiplying lists
    * joining lists same as adding, list_1 + list_2
    * multiplying ```list = [0, 1] * 10``` results in 0, 1 being repeated ten times
* further string features
    * strings are a list of characters
    * you can slice
    * you cannot change characters using this methods
    * strings don't have list methods
    * reference manual for string methods on python.org
* intro to tuples
    * collections of elements of varying data types
    * defined by ()
    * need commas even after the first solo element to define it as a tuple
    * diff:
        * immutable: once the list is built it's permanent, can't be changed
        * can be replaced outright, but doesn't have .append(), etc.  Doesn't have del.
* tuple operations
    * len
    * if-in
    * iteration with for loop
    * can be added to with + or *
    * use lists for vals of same type
    * use tuples for different types but have a group meaning or structure
* tuples in lists, lists in tuples
    * same as working with nested lists, basically
    * tuples containing mutable elements can have the mutable element modified
* intro to dictionaries
    * key-value pairs like JSON
    * 'key': 'value',
    * 'otherkey': 37,
    * dictionaries are one-way, you can only look up by key, not by content
    * keys can only be immutable types, keys cannot be lists
* dictionary operations
    * can be created with {}
    * add/update a key value pair like grades['dan'] = 'A+'
    * len for num of keys
    * if-in for key value finding
    * del to delete a key value pair
    * dictionaries were unordered before 3.6
    * iterating
        * for loop gives you access to the keys
        * use .values() method to get vals
        * ```for person, grade in grades.items():```
            * gets keys as person, values as grade

## module 5: functions and exceptions
* intro to writing functions
    * naming important
    * reusable code bit
    * ```def function_name():```
    * cannot invoke function before it has been defined
* functions with parameters
    * all arguments must be invoked, and with the right data type
    * functions can have multiple params
    * "positional arguments", most-freq used in py
    * keyword arguments (kwargs)
* default parameter values
    * ```def do_shit(text, letter='a')```
    * if no second param, it defaults to ```a```
* name scopes
    * variables defined outside a function are available inside the function
    * shadowing = can't change a var inside a function and have it show up globally (in the function its a local version of a global)
    * add ```global``` before a var assignment in a functiona and it will change the global value
    * using the .append() method on a global variable inside a function, it will update the global (applied to mutables, not tuples)
* the None value
    * null value
    * not 0, not false, it is only None
* the return keyword  
* recursion
    * py supports recursion
    * a function can call itself
    * factorials is a good example
        * for loop = iterative
        * return the number * the function(number - 1)
        * needs a stop condition for recusion
        * return when factorial value <= 1, return 1
* generators
    * ```yield``` keyword
    * use ```next``` to iterate by one
    * can use ```list``` to make a list of numbers from generator
* intro to exceptions
    * how to read error messages
    * exceptions
    * ```try:``` and ```except```
    * can have multiple exception catches
* can you catch syntax errors?
    * as long as it is not in the ```try``` block
* exception hierarchy
    * 60 built in types, but have understanding
    * BaseException (template for specific types)
        * Exception
            * ArithmeticError
                * ZeroDivisionError
            * LookupError
                * IndexError
                * KeyError
                * (lists and dictionaries)
            * TypeError
                * trying to do things with incompatible data types
            * ValueError
                * type is correct, but the value isn't
        * SystemExit
            * sys.exit to terminate program
        * KeyboardInterrupt
    * py will try to be extremely specific
    * (find chart)
* propogating exceptions
    * when functions call each other
    * exceptions are propogated through functions
* assertion exceptions
    * ```assert```
    * assert (number != 0), 'Got 0 as a number.'
    * used for finding bugs, not error-trapping in logic
    

## study list:
* bitwise operations
* slicing
* multiplying and adding lists
* generators (read up on these)
* try/except 
* exceptions
* assertions
