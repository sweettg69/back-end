print("\n17. Análise de peso e altura:")
alturas = []
peso_90_mais = 0
peso_50_menos_altura_160_menos = 0
altura_190_mais_peso_100_mais = 0

for i in range(1, 8):
    print(f"\nPessoa {i}:")
    peso = float(input("Peso (kg): "))
    altura = float(input("Altura (m): "))
    
    alturas.append(altura)
    
    if peso > 90:
        peso_90_mais += 1
    
    if peso < 50 and altura < 1.60:
        peso_50_menos_altura_160_menos += 1
    
    if altura > 1.90 and peso > 100:
        altura_190_mais_peso_100_mais += 1

media_altura = sum(alturas) / len(alturas)
print(f"\nResultados:")
print(f"a) Média de altura: {media_altura:.2f}m")
print(f"b) Pessoas com mais de 90kg: {peso_90_mais}")
print(f"c) Pessoas com menos de 50kg e menos de 1.60m: {peso_50_menos_altura_160_menos}")
print(f"d) Pessoas com mais de 1.90m e mais de 100kg: {altura_190_mais_peso_100_mais}")
