<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div class="contenedor-xml">
            <!-- Tabla de Música -->
            <h2 style="color: #ff7eb3; text-align: center; margin-top: 20px;">🎸 Repertorio de Guitarra</h2>
            <table>
                <tr style="background-color: #ff7eb3; color: #161b22;">
                    <th>Obra</th>
                    <th>Compositor</th>
                    <th>Estilo</th>
                </tr>
                <xsl:for-each select="miPerfil/guitarra/obra">
                    <tr>
                        <td><xsl:value-of select="titulo"/></td>
                        <td><xsl:value-of select="autor"/></td>
                        <td><xsl:value-of select="estilo"/></td>
                    </tr>
                </xsl:for-each>
            </table>

            <!-- Tabla de Videojuegos -->
            <h2 style="color: #ff7eb3; text-align: center; margin-top: 40px;">🎮 Biblioteca de Juegos</h2>
            <table>
                <tr style="background-color: #ff7eb3; color: #161b22;">
                    <th>Título</th>
                    <th>Plataforma</th>
                    <th>Género</th>
                </tr>
                <xsl:for-each select="miPerfil/videojuegos/juego">
                    <tr>
                        <td><xsl:value-of select="titulo"/></td>
                        <td><xsl:value-of select="plataforma"/></td>
                        <td><xsl:value-of select="genero"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </div>
    </xsl:template>
</xsl:stylesheet>