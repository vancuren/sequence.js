'use strict';

module.exports = class Collection {

  src = [];

  constructor(src) {
    this.src = src;
  }

  /**
   * @returns The underlying array.
   */
  all() {
    return this.src;
  }

  /**
   * @param key If array of objects you can provides
   * a key
   * @returns The the average of of the sum of the array.
   */
  average(key) {
    let sum  = this.src.reduce((p, c, i, arr) => {
      return key ? p = (i == 1 ? parseInt(arr[0][key]) : parseInt(p)) + parseInt(arr[i][key]) : p = parseInt(p) + parseInt(c);
    })
    return sum / this.src.length;
  }

  /**
   * @returns The chuncked array based on size provided.
   */
  chunck(size) {
    let chuncks =  [];
    let chunck = [];
    
    let c = 1;
    let i = 0;
    
    do {
      chunck.push(this.src[i]);
      if (c == size || i == this.src.length -1) { 
        chuncks.push(chunck);
        chunck = [];
        c = 1;
      } else {
        c++;
      }
      i++;
    } while (i < this.src.length)
    return chuncks;
  }

  combine(keys)  {

    let results = this.src.map((v, i) => {
      let object = {};
      object[keys[i]] = v;
      return object;
    });

    return results;
  }

  concat(arr) {
    const result = this.src;
    return result.concat(arr);
  }

  contains(val, explicit) {
    return explicit ? this.src.includes(val) : this.src.includes(val.toString()) || this.src.includes(parseInt(val));
  }

  count() {
    return this.src.length;
  }

  countBy() {
    let results = {};
    this.src.forEach((v, i)  => {
      results[v] = results[v] >= 1 ? results[v]+1 : 1;
    });
    return results;
  }

  crossJoin(arr)  {
    let results = [];
    this.src.forEach((v, i) => {
      arr.forEach((vA, iA) => {
        results.push([v, vA]);
      })
    })
    return results;
  }

  dd() {
    // if (window != undefined) {
    //   let body = document.querySelector('body');
    //   let dumpContainer = document.createElement('div');
    //   let dump = document.createTextNode(JSON.stringify(this));
    //   dumpContainer.appendChild(dump)
    //   body.appendChild(dumpContainer)
    // }
    console.log(this);
    return this;
  }

  diff(arr, explicit) {
    return this.src.filter((v, i) => {
      return explicit ? !arr.includes(parseInt(v)) && !arr.includes(v.toString()) : !arr.includes(v)
    })
  }

  diffObj(arr, key) {
    return this.src.filter((v, i) => {
      return !arr.includes(v[key])
    })
  }

  /**
   * @param key If array of objects you can provides
   * a key
   * @returns The the average of of the sum of the array.
   */
  sum(key) {
    let sum  = this.src.reduce((p, c, i, arr) => {
      return key ? p = (i == 1 ? parseInt(arr[0][key]) : parseInt(p)) + parseInt(arr[i][key]) : p = parseInt(p) + parseInt(c);
    })
    return sum;
  }

};