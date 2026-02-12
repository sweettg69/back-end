print("\n15. Análise de idades:")
idades = []
mais_18 = 0
menos_5 = 0

for i in range(1, 11):
    idade = int(input(f"Digite a idade da {i}ª pessoa: "))
    idades.append(idade)
    
    if idade > 18:
        mais_18 += 1
    if idade < 5:
        menos_5 += 1

media = sum(idades) / len(idades)
print(f"a) Média de idade: {media:.1f} anos")
print(f"b) Pessoas com mais de 18 anos: {mais_18}")
print(f"c) Pessoas com menos de 5 anos: {menos_5}")
print(f"d) Maior idade: {max(idades)} anos")
