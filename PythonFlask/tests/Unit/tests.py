import sys
import json
import unittest

sys.path.append("./.")
from PythonFlask.src import *


class Mis_tests(unittest.TestCase):
    def test_resta(self):
        self.assertTrue(1-1==0)

    
    def test_suma(self):
        self.assertEqual(2+2,4)


    #@classmethod
    #def setUpClass(self):
    #    "set up test fixtures"
    #    print('### Setting up flask server ###')
    #    app = create_app()
    #    app.config['TESTING'] = True
    #    self.app = app.test_client()

