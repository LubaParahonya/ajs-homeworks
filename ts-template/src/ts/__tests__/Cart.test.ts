import Book from '../domain/Book';
import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add book', ()=>{
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  expect(cart.items.length).toBe(1);
});

test('add music', ()=>{
  const cart = new Cart();
  const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(music);
  expect(cart.items.length).toBe(1);
});

test('add movie', ()=>{
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 500, 4, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 137);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});

test('sum movie', ()=>{
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 500, 4, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 137);
  cart.add(movie);
  const result = cart.sumItems()
  expect(result).toBe(2000);
});

test('sum discont movie', ()=>{
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 500, 4, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 137);
  cart.add(movie);
  const result = cart.sumDiscontItem(10)
  expect(result).toBe(1800);
});

test('delete book', ()=>{
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  cart.deleteItem(1001)
  expect(cart.items.length).toBe(0);
});

test('delete book', ()=>{
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  cart.deleteItem(1002)
  expect(cart.items.length).toBe(1);
});

test('delete music', ()=>{
  const cart = new Cart();
  const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(music);
  cart.deleteItem(1008)
  expect(cart.items.length).toBe(0);
});

test('delete music', ()=>{
  const cart = new Cart();
  const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(music);
  cart.deleteItem(1009)
  expect(cart.items.length).toBe(1);
});

test('delete movie', ()=>{
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 500, 4, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 137);
  cart.add(movie);
  cart.deleteItem(1)
  expect(cart.items.length).toBe(0);
});

test('delete movie', ()=>{
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 500, 4, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 137);
  cart.add(movie);
  cart.deleteItem(5)
  expect(cart.items.length).toBe(1);
});

