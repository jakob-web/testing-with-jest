const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test ('Pushing two elements and then popping one, then doing the same action again. peek on stack and return the top element and to be defined ', ()=>{
    stack.push(1);
    stack.push(58)
    stack.pop()
    stack.push("hej")
    stack.push("hejsan")
    stack.pop()
    
    
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe("hej");
    
    
    });
    