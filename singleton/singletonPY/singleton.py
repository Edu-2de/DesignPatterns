class ConfigManager:
      _instance = None  # Atributo de classe para armazenar a única instância

      def __new__(cls, *args, **kwargs):
            if cls._instance is None:
                  cls._instance = super().__new__(cls)
            return cls._instance

      def set_config(self, chave, valor):  # Adiciona self aqui
            if not hasattr(self, '_config'):
                  self._config = {}
            self._config[chave] = valor

      def get_config(self, chave):  # Adiciona self aqui
            return self._config.get(chave)
    
cfg1 = ConfigManager()
cfg2 = ConfigManager()

cfg1.set_config('db_url', 'localhost:5432')
print(cfg2.get_config('db_url'))  # Deve imprimir: localhost:5432
print(cfg1 is cfg2)  # Deve imprimir: True