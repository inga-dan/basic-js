module.exports = class DepthCalculator {
    calculateDepth(arr ) {
            if (Array.isArray(arr)) {
                arr = arr.filter(val => Array.isArray(val));
                let test = 0;
                for (let i = 0; i < arr.length; i++)
                    test = Math.max(test, this.calculateDepth(arr[i]))
                return 1 + test;
            }
            return 0;
        }
    }