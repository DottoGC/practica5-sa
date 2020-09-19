try:
    import sys
    import json
    import unittest
    #sys.path.append("C:\\Users\\dotto\\Dropbox\\U\\2020\\Segundo Semestre\\Advanced software\\Laboratory\\Practica5\\PythonFlask2\\src\\")
    sys.path.append("..\\src\\")
    from repartidor import app
except Exception as identifier:
    print('Some modules are Missing {}'.format(identifier))


class Mis_tests(unittest.TestCase):
    def test_resta(self):
        self.assertTrue(1-1==0)

    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/repartidores')
        statuscode = response.status_code
        self.assertEqual(statuscode,200)


if __name__ == '__main__':
    unittest.main()
