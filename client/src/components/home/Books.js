import React from "react";

const Books = () => {
  return (
    <div className='book-row my-1'>
      <div className='book-col'>
        <img
          src='https://images-production.bookshop.org/spree/images/attachments/12381327/original/9780525620785.jpg?1594820911'
          alt='Book cover'
        />
        <button className='btn badge badge-pill badge-light'>Info</button>
        <button className='btn badge badge-pill badge-danger'>Buy</button>
        {/* <div href=https://bookshop.org/a/10279/9780525620785 /> */}
      </div>

      <div className='book-col'>
        <img
          src='https://images-production.bookshop.org/spree/images/attachments/137668/original/9780525509288.jpg?1592513675'
          alt='Book cover'
        />
        {/* https://bookshop.org/a/10279/9780525509288 */}

        <button className='btn badge badge-pill badge-light'>Info</button>
        <button className='btn badge badge-pill badge-danger'>Buy</button>
      </div>

      <div className='book-col'>
        <img
          src='https://images-production.bookshop.org/spree/images/attachments/248379/original/9780374312718.jpg?1592231334'
          alt='Book cover'
        />

        <button className='btn badge badge-pill badge-light'>Info</button>
        <button className='btn badge badge-pill badge-danger'>Buy</button>
        {/* https://bookshop.org/a/10279/9780374312718 */}
      </div>

      <div className='book-col'>
        <img
          src='https://images-production.bookshop.org/spree/images/attachments/1933709/original/9781338503265.jpg?1588600026'
          alt='Book cover'
        />
        <button className='btn badge badge-pill badge-light'>Info</button>
        <button className='btn badge badge-pill badge-danger'>Buy</button>
        {/* https://bookshop.org/a/10279/9781338503265 */}
      </div>

      <div className='book-col'>
        <img
          src='https://images-production.bookshop.org/spree/images/attachments/326900/original/9781624148019.jpg?1588168925'
          alt='Book cover'
        />

        <button className='btn badge badge-pill badge-light'>Info</button>
        <button className='btn badge badge-pill badge-danger'>Buy</button>
        {/* https://bookshop.org/a/10279/9781624148019 */}
      </div>
    </div>
  );
};
export default Books;
