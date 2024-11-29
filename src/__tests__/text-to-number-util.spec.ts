import { textToNumberUtil } from '../text-to-number';

describe("FEATURE: textToNumberUtil", () => {
  describe("GIVEN: 'quatorze reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 14", () => {
        expect(textToNumberUtil("quatorze reais")).toBe(14);
      });
    });
  });

  describe("GIVEN: 'um real'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1", () => {
        expect(textToNumberUtil("um real")).toBe(1);
      });
    });
  });

  describe("GIVEN: 'dois reais e cinquenta centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 2.50", () => {
        expect(textToNumberUtil("dois reais e cinquenta centavos")).toBe(2.5);
      });
    });
  });

  describe("GIVEN: 'cem reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 100", () => {
        expect(textToNumberUtil("cem reais")).toBe(100);
      });
    });
  });

  describe("GIVEN: 'mil reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1000", () => {
        expect(textToNumberUtil("mil reais")).toBe(1000);
      });
    });
  });

  describe("GIVEN: 'um real e um centavo'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1.01", () => {
        expect(textToNumberUtil("um real e um centavo")).toBe(1.01);
      });
    });
  });

  describe("GIVEN: 'três reais e oitenta e nove centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 3.89", () => {
        expect(textToNumberUtil("três reais e oitenta e nove centavos")).toBe(3.89);
      });
    });
  });

  describe("GIVEN: 'dez reais e dez centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 10.10", () => {
        expect(textToNumberUtil("dez reais e dez centavos")).toBe(10.1);
      });
    });
  });

  describe("GIVEN: 'um milhão de reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1000000", () => {
        expect(textToNumberUtil("um milhão de reais")).toBe(1000000);
      });
    });
  });

  describe("GIVEN: 'dois bilhões de reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 2000000000", () => {
        expect(textToNumberUtil("dois bilhões de reais")).toBe(2000000000);
      });
    });
  });

  describe("GIVEN: 'mil reais e vinte centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1000.20", () => {
        expect(textToNumberUtil("mil reais e vinte centavos")).toBe(1000.2);
      });
    });
  });

  describe("GIVEN: 'quinhentos e quarenta e cinco reais e quinze centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 545.15", () => {
        expect(
          textToNumberUtil("quinhentos e quarenta e cinco reais e quinze centavos")
        ).toBe(545.15);
      });
    });
  });

  describe("GIVEN: 'mil e vinte reais e quarenta centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1020.40", () => {
        expect(textToNumberUtil("mil e vinte reais e quarenta centavos")).toBe(1020.4);
      });
    });
  });

  describe("GIVEN: 'novecentos reais e noventa e nove centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 900.99", () => {
        expect(textToNumberUtil("novecentos reais e noventa e nove centavos")).toBe(
          900.99
        );
      });
    });
  });

  describe("GIVEN: 'quarenta centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 0.40", () => {
        expect(textToNumberUtil("quarenta centavos")).toBe(0.4);
      });
    });
  });

  describe("GIVEN: 'vinte e cinco centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 0.25", () => {
        expect(textToNumberUtil("vinte e cinco centavos")).toBe(0.25);
      });
    });
  });

  describe("GIVEN: 'zero reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 0", () => {
        expect(textToNumberUtil("zero reais")).toBe(0);
      });
    });
  });

  describe("GIVEN: 'milhões e cem reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 1000100", () => {
        expect(textToNumberUtil("milhões e cem reais")).toBe(1000100);
      });
    });
  });

  describe("GIVEN: 'dois milhões e vinte reais e cinquenta centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 2000020.50", () => {
        expect(
          textToNumberUtil("dois milhões e vinte reais e cinquenta centavos")
        ).toBe(2000020.5);
      });
    });
  });

  describe("GIVEN: 'oitocentos e quarenta e três reais'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 843", () => {
        expect(textToNumberUtil("oitocentos e quarenta e três reais")).toBe(843);
      });
    });
  });

  describe("GIVEN: 'oitocentos e quarenta e três reais e noventa centavos'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 843.90", () => {
        expect(
          textToNumberUtil("oitocentos e quarenta e três reais e noventa centavos")
        ).toBe(843.9);
      });
    });
  });

  describe("GIVEN: 'quinhentos reais para comprar pão'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 500", () => {
        expect(textToNumberUtil("quinhentos reais para comprar pão")).toBe(500);
      });
    });
  });

  describe("GIVEN: 'cem reais e cinquenta centavos para pagar o táxi'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 100.50", () => {
        expect(
          textToNumberUtil("cem reais e cinquenta centavos para pagar o táxi")
        ).toBe(100.5);
      });
    });
  });

  describe("GIVEN: 'apenas cinquenta centavos, por favor'", () => {
    describe("WHEN: textToNumberUtil is called", () => {
      test("THEN: return 0.50", () => {
        expect(textToNumberUtil("apenas cinquenta centavos, por favor")).toBe(0.5);
      });
    });
  });
});
