#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int minimumOperationsToWriteY(vector<vector<int>> &grid)
    {
        int n = grid.size();
        vector<vector<int>> vis(n, vector<int>(n, 0));
        int m = n / 2;
        vector<int> ydig(3, 0);
        int i = 0, j = 0;
        while (i < m && j < m)
        {

            ydig[grid[i][j]]++;
            vis[i][j]++;
            i++;
            j++;
        }
        i = 0;
        j = n - 1;
        while (i < m && j > m)
        {
            ydig[grid[i][j]]++;

            vis[i][j]++;
            i++;
            j--;
        }
        for (int i = m; i < n; i++)
        {
            ydig[grid[i][m]]++;
            vis[i][m]++;
        }
        vector<int> other(3, 0);
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (vis[i][j] == 0)
                    other[grid[i][j]]++;
            }
        }

        // cout<<ydig[0]+ydig[2]+other[2]+other[1]<<endl;
        int ans = INT_MAX;
        // o and 1;
        ans = min(ans, (ydig[1] + ydig[2] + other[0] + other[2]));
        // 0 and 2;
        ans = min(ans, (ydig[1] + ydig[2] + other[0] + other[1]));
        // 1 and 2
        ans = min(ans, (ydig[0] + ydig[2] + other[0] + other[1]));
        // 1 and 0
        ans = min(ans, (ydig[0] + ydig[2] + other[2] + other[1]));
        // 2 and 1
        ans = min(ans, (ydig[0] + ydig[1] + other[0] + other[2]));
        // 2 and 0
        ans = min(ans, (ydig[0] + ydig[1] + other[1] + other[2]));
        return ans;
    }
};
int main()
{
}