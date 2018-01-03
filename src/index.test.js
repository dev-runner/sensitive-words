import sensitiveWords from '.';

test('Replaces blacklisted words with asterisks', () => {
  expect( sensitiveWords("Name of the NX will be the Nintendo Switch.", ["switch"]) )
  .toBe("Name of the NX will be the Nintendo ***.");
});

test('Replaces multiple instances of blacklisted words', () => {  
  expect( sensitiveWords("Name of the NX will be the Nintendo Switch. The switch will be awesome.", ["switch"]) )
  .toBe("Name of the NX will be the Nintendo ***. The *** will be awesome.");
});