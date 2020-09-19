try:
    import sys
    import json
    import unittest
    #sys.path.append("C:\\Users\\dotto\\Dropbox\\U\\2020\\Segundo Semestre\\Advanced software\\Laboratory\\Practica5\\PythonFlask\\src\\")
    sys.path.append("..\\src\\")
    from api import app   
except Exception as identifier:
    print('Some modules are Missing {}'.format(identifier))


class Mis_tests(unittest.TestCase):
    def test_suma(self):
        self.assertEqual(2+2,4)


    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/pedidos')
        statuscode = response.status_code
        self.assertEqual(statuscode,200)

if __name__ == '__main__':
    unittest.main()
